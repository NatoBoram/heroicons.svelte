<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import EyeSvelte from '../../../lib/20/solid/eye.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: EyeSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="Eye" />
