<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import StrikethroughSvelte from '../../../lib/24/outline/strikethrough.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: StrikethroughSvelte,
		args: { class: '' },
	})
</script>

<Story name="Strikethrough" />
