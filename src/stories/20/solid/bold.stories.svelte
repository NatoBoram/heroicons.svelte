<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import BoldSvelte from '../../../lib/20/solid/bold.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: BoldSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="Bold" />
