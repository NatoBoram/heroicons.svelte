<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import BoldSvelte from '../../../lib/24/solid/bold.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: BoldSvelte,
		args: { class: '' },
	})
</script>

<Story name="Bold" />
