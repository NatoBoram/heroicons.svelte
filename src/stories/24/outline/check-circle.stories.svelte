<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CheckCircleSvelte from '../../../lib/24/outline/check-circle.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: CheckCircleSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="CheckCircle" />
