<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import SparklesSvelte from '../../../lib/24/outline/sparkles.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: SparklesSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="Sparkles" />
