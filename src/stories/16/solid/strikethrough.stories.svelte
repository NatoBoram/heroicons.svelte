<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import StrikethroughSvelte from '../../../lib/16/solid/strikethrough.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: StrikethroughSvelte,
		args: { class: '' },
	})
</script>

<Story name="Strikethrough" />
