<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ExclamationCircleSvelte from '../../../lib/24/outline/exclamation-circle.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ExclamationCircleSvelte,
		args: { class: '' },
	})
</script>

<Story name="ExclamationCircle" />
