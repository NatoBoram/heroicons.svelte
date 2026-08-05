<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import BoldSvelte from '../../../lib/24/outline/bold.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: BoldSvelte,
		args: { class: '' },
	})
</script>

<Story name="Bold" />
