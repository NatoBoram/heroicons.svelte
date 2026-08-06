<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import SparklesSvelte from '../../../lib/24/outline/sparkles.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: SparklesSvelte,
		args: { class: '' },
	})
</script>

<Story name="Sparkles" />
