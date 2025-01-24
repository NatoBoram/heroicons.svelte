<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import EyeSvelte from '../../../lib/24/solid/eye.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: EyeSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="Eye" />
