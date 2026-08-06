<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import EyeSvelte from '../../../lib/24/solid/eye.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: EyeSvelte,
		args: { class: '' },
	})
</script>

<Story name="Eye" />
