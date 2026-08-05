<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import BoldSvelte from '../../../lib/16/solid/bold.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: BoldSvelte,
		args: { class: '' },
	})
</script>

<Story name="Bold" />
